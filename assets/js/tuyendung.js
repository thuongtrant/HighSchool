const btns =[
{
    id: 1,
    name: 'Tiếng anh'
},
{
    id: 2,
    name: 'Toán'
},
{
    id: 3,
    name: 'Ngữ Văn'
},
{
    id: 4,
    name: 'Vật lý'
},
{
    id: 5,
    name: 'Sinh học'
},
{
    id:6,
    name: 'Địa lý'
}]
const filters = [... new Set(btns.map((btn)=>
    { return btn}))]
    document.getElementById('btns').innerHTML=filters.map((btn)=>{
        var {name,id}=btn;
        return (
            "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
        )
    }).join('');

const career = [
    {
        id:5,
        image:'assets/images/pic-career-1.jpg',
        title: 'Giáo viên Sinh Học',
        amount: 2,
    },
    {
        id:2,
        image:'assets/images/pic-career-2.jpg',
        title: 'Giáo viên Toán Học',
        amount: 2,
    },
    {
        id:3,
        image:'assets/images/pic-career-3.jpg',
        title: 'Giáo viên Ngữ Văn',
        amount: 2,
    },
    {
        id:3,
        image:'assets/images/pic-career-4.jpg',
        title: 'Giáo viên Ngữ Văn',
        amount: 2,
    },
    {
        id:4,
        image:'assets/images/pic-career-5.jpg',
        title: 'Giáo viên Vật lý',
        amount: 2,
    },
    {
        id:6,
        image:'assets/images/pic-career-6.jpg',
        title: 'Giáo viên Địa lý',
        amount: 2,
    },
    {
        id:6,
        image:'assets/images/pic-career-7.jpg',
        title: 'Giáo viên Địa lý',
        amount: 2,
    },
    {
        id:2,
        image:'assets/images/pic-career-8.jpg',
        title: 'Giáo viên Toán học',
        amount: 2,
    },
    {
        id:2,
        image:'assets/images/pic-career-9.jpg',
        title: 'Giáo viên Toán học',
        amount: 2,
    },
    {
        id:4,
        image:'assets/images/pic-career-10.jpg',
        title: 'Giáo viên Vật lý',
        amount: 2,
    },
    {
        id:1,
        image:'assets/images/pic-career-11.jpg',
        title: 'Giáo viên Tiếng Anh',
        amount: 2,
    },
    {
        id:1,
        image:'assets/images/pic-career-12.jpg',
        title: 'Giáo viên Tiếng Anh',
        amount: 2,
    },
    {
        id:1,
        image:'assets/images/pic-career-13.jpg',
        title: 'Giáo viên Tiếng Anh',
        amount: 2,
    },
];
const listCareer=[...new Set(career.map((itemCareer)=>
    {  return itemCareer  }))]
    const filterItems = (a) => {
        const filterCareer = listCareer.filter(itemCareer);
        function itemCareer(value) {
            if(value.id ==a){
                return(value.id)
            }
        }
        displayItem(filterCareer)
    }
const displayItem = (items)=> {
    document.getElementById('root').innerHTML = items.map((itemCareer)=>
    {
        var {image, title, amount} = itemCareer;
        return ( 
            `<div class='box'>
            <div class='img-box'>
            <img class='images-career' src=${image}></img>
            </div>
            <h3>${title}</h3>
            </div>`)
    }).join('');
}
displayItem(listCareer);