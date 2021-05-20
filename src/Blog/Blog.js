import React from 'react'
import Footer from '../Footer/Footer'
import MyNavbar from '../Navbar/MyNavbar'
import js1 from '../img/blog/js.jpeg'
import js2 from '../img/blog/js.jpg'
import reactImg from '../img/blog/react.png'
import wash from '../img/blog/washing-brain.jpg'

const Blog = () => {
    return (
        <div className="bg-dark text-white p-2">
          <MyNavbar></MyNavbar>
            
            <h2 className="p-3 mb-5 text-center">My Blogs</h2>
            
            <div className="row mb-5 p-3 text-dark">
                <div className="col-md-6">
                    <div className="card">
                    <img className="img-fluid" src={js1} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">The most important JavaScript concepts you must know!</h5>
                        <p className="card-text">Let is a block level variable. It is not accessible outside of it’s block. Variable with let can be re-assignable. Const variable can’t be re-assigned. It will through an error if we want to re-assign.</p>
                        <a target="_blank" href="https://hasansiam4545.medium.com/the-most-important-javascript-concepts-you-must-know-d905d37baae6" className="btn btn-primary">Read More...</a>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                     <div className="card">
                    <img className="img-fluid" src={js2} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Enrich Your JavaScript Knowledge</h5>
                        <p className="card-text">When we run our JavaScript code it compiles the whole code. Hoisting is a process of JavaScript where variables and function declarations are moved to the top of their scope before the code execution..</p>
                        <a target="_blank" href="https://hasansiam4545.medium.com/enrich-your-javascript-knowledge-4cf28277f1d1" className="btn btn-primary">Read More...</a>
                    </div>
                    </div>
                    
                </div>
            
            </div>

             <div className="row mb-5 p-3 text-dark">
                <div className="col-md-6">
                      <div className="card">
                    <img className="img-fluid" src={reactImg} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Let's Introduce with React</h5>
                        <p className="card-text">React is an open source JavaScript library that is used for building user interfaces. React allows developers to create large web applications that can change data, without reloading the page. .</p>
                        <a target="_blank" href="https://hasansiam4545.medium.com/lets-introduce-with-react-167a74db0c81" className="btn btn-primary">Read More...</a>
                    </div>
                    </div>
                    
                </div>
                <div className="col-md-6">
                      <div className="card">
                    <img className="img-fluid" src={wash} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Wash your brain with JavaScript</h5>
                        <p className="card-text">In JavaScript truthy value is considered true as a Boolean context and falsy value in considered false. All values are truthy value if we don’t define them false. Here are some examples of truthy and falsy values-</p>
                        <a target="_blank" href="https://hasansiam4545.medium.com/wash-your-brain-with-javascript-30f4a6b693ea" className="btn btn-primary">Read More...</a>
                    </div>
                    </div>
                    
                </div>
            
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Blog
