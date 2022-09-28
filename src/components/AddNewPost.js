import React from 'react';
import { addNewPost } from "../api";

const AddNewPost = (props) => {
    
    const {token} = props;

    let title = '';
    let description = '';
    let price = '';
    let location = '';
    let willDeliver = false;
    
    const addPost = (e) => {
        e.preventDefault();
        try {
        addNewPost(title, description, price, location, willDeliver, token);
        } catch (error) {
        console.error(error);
        }
  };
    

    return (
        <div className="add-new-post">
            <h1>Add New Post</h1>
            <form action="" className="form new-post-form" onSubmit={e=> addPost(e)}>
                <input type="text" placeholder='Title'
                onChange={function(event) {
                    title = event.target.value;
                  }}
                />
                {/* <input className="large-text-input" type="text" placeholder='Description'
                onChange={function(event) {
                    description = event.target.value;
                  }}
                /> */}
                <textarea placeholder='Description'
                onChange={function(event) {
                    description = event.target.value;
                  }}></textarea>
                <input type="text" placeholder='Price'
                onChange={function(event) {
                    price = event.target.value;
                  }}
                />
                <input type="text" placeholder='Location'
                onChange={function(event) {
                    location = event.target.value;
                  }}
                />
                <label htmlFor="">Will Deliver?</label>
                <input type="checkbox"/>
                <button className="add-new-post-btn">Create</button>

            </form>
        </div>

    )
}

export default AddNewPost;