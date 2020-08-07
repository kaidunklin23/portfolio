import React from 'react';

const People = (props) => {
  
        //This gives me the value of props
        console.log(props)
       
        const {arrayOfPeople} = props;

        const listOfPeoplehtml = arrayOfPeople.map(person => {
        return person.age > 25 ? (
            <div className='person' key={person.id}>
                     <div>
                     Name: {person.name}
                     </div>
                     <div>
                    Age: {person.age}
                     </div>
                     <div>
                     FavoriteFood: {person.favoriteFood}
                     </div>
                 </div>
        ):null
        }
        )
//             if(person.age > 25){
//             return(
//                 
//             )
//         }else {
//             return null;
//         }
//     }
// )

    return(
        <div className="people">
           {listOfPeoplehtml}
        </div>

        )

    }
    

export default People;