import React, { Component } from "react";
import { Media } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props); //Supply props to super class i.e the parent class. The parent class exists in App.js (Always requried while creating a class component)
    // Creates a State which stores properties related to the component
    this.state ={
        dishes:[ //dishes is an array of js objects as you can see
            {
                id: 0,
                name:'Uthappizza',
                image: 'assets/images/uthappizza.png',
                category: 'mains',
                label:'Hot',
                price:'4.99',
                description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
             {
                id: 1,
                name:'Zucchipakoda',
                image: 'assets/images/zucchipakoda.png',
                category: 'appetizer',
                label:'',
                price:'1.99',
                description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
             {
                id: 2,
                name:'Vadonut',
                image: 'assets/images/vadonut.png',
                category: 'appetizer',
                label:'New',
                price:'1.99',
                description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
             {
                id: 3,
                name:'ElaiCheese Cake',
                image: 'assets/images/elaicheesecake.png',
                category: 'dessert',
                label:'',
                price:'2.99',
                description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        
            }
        ]
    }
  }
  //Render method returns what needs to be displayed on th UI by this component
  render() {
    const menu = this.state.dishes.map((dish) =>{
        return(
             //Whenever we create a list in react every attribute requires a key  which helps react to recognize each of the elements
             <div key={dish.id} className='col-12 mt-5'> 
                <Media tag='li'>
                    <Media left middle>
                        <Media object src={dish.image} alt={dish.name} />
                    </Media>
                    <Media body className='ml-5'>
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                </Media>
            </div>
        );
    }) ;
    return (
      <div className="container">
           {/* Bootstrap 4 class which divides each row into a grid of 12 columns */}
           <div className="row">
             {/* Displays  a list of items */}
             <Media list>
             {/* Just displays the content from the menu variable defined above */}
                {menu} 
            </Media>
        </div>
      </div>
    );
  }
}

export default Menu;
