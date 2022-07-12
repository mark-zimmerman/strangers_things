I need to make the JS registration to get a token
If they click the register button in the log in form it will call an api function
that will post their input into the database
then when they log in we will fetch get the info they type in
if it is truthy then they will be logged in and we will set the local storage to those values so they can reamin logged in.

- log in page
    - username
    - password
    - log in button 
((Once btn is clicked check to see if the input values match a profile in database))

- Home 
    - Welcome to stranger things
    - Logged in as {username}
    - View Prifile button (renders profile page)

- Profile Page 
    - Welcome {username}
    - Messages to me
        - Array of messages
        - From: {sender}
        - message.. 'im interested in.. blah blah'
        - View My Post: {title of post}. 
    ((Renders the Individual Post Page))
    - Messages from me
        - Array of messages
        - (Sent By Me)
        - 'whatever the message was'
        - Message Again: {title of post} (renders the send message page)
- Posts 
    - Header Area
        - Posts
        - Search posts input field ((searches All Posts by text and displays matches))
        - Add Post button (renders add new post page)
    - Array of posts
    - Send Message (renders send message page)
- Individual Post (accessed by clicking "view my post" in profile page) ONLY MY POSTS!
    - Same info as posts just the specific post
    - Delete Button ((fetch delete))
    - Edit Button   (renders the edit post page)
    - Messages regarding this post: ((?))
    - Array of messages 
- Add New Post (accessed from the new post button)
    - Title
    - Description
    - Price 
    - Location
    - Deliver?
    - Make new post button ((fetch post post))(when clicked adds to all posts and shows message)
- Edit Post
    - Same as new post (but different URL maybe?)
    - ((fetch patch))
- Send Message 
    - Post info same as normal view
    - Message User about this post
    - Text input (write your message)
    - Send Message Button (adds message to Sent by me messages in profile page)