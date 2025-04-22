import Card from "./Components/Cards/Card"
import './App.css'

function App() {
 let card=[
  {
img:"https://storage.yandexcloud.net/mostro-gm-media/0a402de4-d02b-f3d4-b58c-4e4e45f31137/9.jpg",
titl:"Barberton Daisy",
price:"119.00"},
{
  img:"https://cdn.poryadok.ru/upload/iblock/018/01890f3af06f10132f289fffc8c68042.JPG",
  titl:"Angel Wing Bergonia",
  price:"169.00"},
  {
    img:"https://modi.ru/upload/product/7fb/9r1ds67wyr2qg55l195ohdpesp2y2sa7.jpg",
    titl:"African Violet",
    price:"199.00"},
    {
      img:"https://modi.ru/upload/product/7fb/9r1ds67wyr2qg55l195ohdpesp2y2sa7.jpg",
      titl:"Beach Spider Lily",
      price:"129.00"},
      {
        img:"https://novosibirsk.rus-buket.ru/files/icons/icon-898_0.png",
        titl:"Blushing Bromliad",
        price:"139.00"},
        {
          img:"https://storage.yandexcloud.net/mostro-gm-media/95dd863d-d3a7-3243-b00e-c99d443e4d4f/56UGRAD-1.jpg",
          titl:"Aluminum Plant",
          price:"179.00"},
          {
            img:"https://geoglass.ru/wp-content/uploads/2024/10/dsc09541-kopija-e1729933563554.jpg",
            titl:"Bird`s Nest Fern",
            price:"99.00"},
            {
              img:"https://cdn.botanichka.ru/wp-content/uploads/2020/03/10-luchshih-podarochnyih-komnatnyih-rasteniy-08.jpg",
              titl:"Broadleaf Lady Paim",
              price:"59.00"},
              {
                img:"https://artplants.ru/wp-content/uploads/2023/11/fikus-bendzhamina-v-kashpo-s-avtopolivom-lechuza-obshhaja-vysota-30-sm.jpg",
                titl:"Chinese Evergreen",
                price:"39.00"}
]
  return (
    <> <section id='one'>
    <div className='container'>
    <div className='cards'>
    {card.map((todo,index)=>(<Card key={index}
    img={todo.img}
    titl={todo.titl}
    price={todo.price}/>))
      }
      </div>
      </div>
      </section> 
    </>
  )
}

export default App
