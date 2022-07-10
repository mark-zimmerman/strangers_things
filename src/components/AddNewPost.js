import React from 'react';

const AddNewPost = () => {

    return (
        <div className="add-new-post">
            <h1>Add New Post</h1>
            <form action="" className="form">
                <input type="text" value='Title'/>
                <input type="text" value='Description'/>
                <input type="text" value='Price'/>
                <input type="text" value='Location'/>
                <label htmlFor="">Will Deliver?</label>
                <input type="checkbox"/>
                <button>Create</button>

            </form>
        </div>

    )
}

export default AddNewPost;