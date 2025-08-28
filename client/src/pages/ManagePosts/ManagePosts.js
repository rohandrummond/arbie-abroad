import { useEffect, useState, useRef } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Modal from '../../components/Modal/Modal'
import DesktopOnlyMsg from '../../components/DesktopOnlyMsg/DesktopOnlyMsg'

function ManagePosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function getAllPosts() {
      try {
        const response = await fetch('/api/posts')
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
    getAllPosts()
  }, [])

  const modalRef = useRef()
  const [modalState, setModalState] = useState({})

  const { authenticated, userInfo } = useSelector(
    (state) => state.authenticator
  )
  if (!authenticated || userInfo.type !== 'admin') {
    return <Navigate to="/forbidden" replace />
  }

  async function handlePostDelete(e) {
    const postId = {
      id: e.target.id,
    }
    fetch(`/api/posts`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postId),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 'success') {
          setModalState({
            state: 'Success!',
            message: 'Post has been deleted.',
          })
          modalRef.current.showModal()
          setPosts((prevPosts) =>
            prevPosts.filter((post) => post._id !== postId.id)
          )
        } else {
          setModalState({
            state: 'Error',
            message: 'There was a problem deleting that post.',
          })
          modalRef.current.showModal()
        }
      })
  }

  return (
    <>
      <div className="flex column full-vp">
        <Nav></Nav>
        <DesktopOnlyMsg page="Manage Posts" />
        <div className="flex row centered desktop-only manage-post-ctr">
          <div className="flex column centered">
            <div className="flex row centered table-hd-ctr">
              <h1 className="small-hd">Manage posts</h1>
              <a className="btn body-txt" href="/create-post">
                Create
              </a>
            </div>
            {posts.length === 0 ? (
              <p className="sub-txt">
                You haven't created any posts yet. Try creating one using the
                button above!
              </p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th className="body-txt">Title</th>
                    <th className="body-txt">Country</th>
                    <th className="body-txt">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post._id}>
                      <td className="body-txt">{post.city}</td>
                      <td className="body-txt">{post.country}</td>
                      <td>
                        <Link
                          to={`/edit-post/${post.city
                            .replaceAll(' ', '-')
                            .toLowerCase()}`}
                          state={{ post }}
                          key={post._id}
                        >
                          <img
                            src="edit.svg"
                            className="table-edt-icon"
                            alt="Edit post"
                          />
                        </Link>
                        <img
                          src="delete.svg"
                          className="table-dlt-icon"
                          alt="Delete post"
                          id={post._id}
                          onClick={handlePostDelete}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <Modal ref={modalRef} modalInfo={modalState}></Modal>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ManagePosts
