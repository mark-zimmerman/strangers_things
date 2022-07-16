import React from 'react';

const AddNewPost = () => {

    return (
        <div className="add-new-post">
            <h1>Add New Post</h1>
            <form action="" className="form">
                <input type="text" placeholder='Title'/>
                <input type="text" placeholder='Description'/>
                <input type="text" placeholder='Price'/>
                <input type="text" placeholder='Location'/>
                <label htmlFor="">Will Deliver?</label>
                <input type="checkbox"/>
                <button>Create</button>

            </form>
        </div>

    )
}

export default AddNewPost;