let postBtn = document.querySelector("#postBtn");
let postsDiv = document.querySelector("#posts");
let contentInput = document.querySelector("#content");
let charCount = document.querySelector("#charCount");

/* Character Counter */

contentInput.addEventListener("input", function () {
    charCount.textContent = contentInput.value.length + " characters";
});

/* Add Post */

postBtn.addEventListener("click", function () {

    let title = document.querySelector("#title").value;
    let content = document.querySelector("#content").value;

    if (title === "" || content === "") {
        alert("Please fill all fields");
        return;
    }

    let post = document.createElement("div");
    post.classList.add("post");

    let postTitle = document.createElement("h3");
    postTitle.textContent = title;

    let postContent = document.createElement("p");
    postContent.textContent = content;

    /* Edit Button */

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", function () {
        let newContent = prompt("Edit your post:");
        postContent.textContent = newContent;
    });

    /* Delete Button */

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        post.remove();
    });

    let actionDiv = document.createElement("div");
    actionDiv.classList.add("actions");

    actionDiv.appendChild(editBtn);
    actionDiv.appendChild(deleteBtn);

    post.appendChild(postTitle);
    post.appendChild(postContent);
    post.appendChild(actionDiv);

    postsDiv.appendChild(post);

    document.querySelector("#title").value = "";
    document.querySelector("#content").value = "";

});