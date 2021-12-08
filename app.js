document.addEventListener('DOMContentLoaded', function(){
const list = document.querySelector('#book-list ul');
//delete book
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li =e.target.parentElement;
        list.removeChild(li);
    }
})

//add book
const addform = document.forms['add-book'];

addform.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addform.querySelector('input[type="text"]').value;
    
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);


});

//hide book

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    }else{
        list.style.display = "initial";
    }
});

//filter book
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!=-1){
            book.style.display = 'block';
        }else{
            book.style.display = 'none';
        }
    })
});



const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
      const targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach((panel) => {
        if(panel == targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      });
    }
  });





// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('navigation to this site', e.target.text.content ,'was prevented');
// })

})