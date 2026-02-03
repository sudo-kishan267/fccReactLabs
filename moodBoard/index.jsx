export function MoodBoardItem ({color, image, description}) {
      const componentStyle = {
        backgroundColor : color

      };
    return (      
       <div className="mood-board-item" style={componentStyle}>
        <img src={image} className="mood-board-image" />
        <h3 className="mood-board-text">{description}</h3>

       </div> 
      );
};

export function MoodBoard () {
   
   const cards = [
    {   
        id: 1,
        color: "#FB9378",
        image : "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
        description: "Pathway"
    },
    {   
        id: 2,
        color: "#34656D",
        image : "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
        description: "Shore"
    },
    {   
        id: 3,
        color: "#f47c7c",
        image : "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
        description: "Grass"
    },
    {   
        id: 4,
        color: "#F5E1DA",
        image : "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
        description: "Ship"
    },
    {   
        id: 5,
        color: "#AB6088",
        image : "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
        description: "Santorini"
    },
    {   
        id: 6,
        color: "#E0C97E",
        image : "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
        description: "Pigeon"
    }

]
    return (
    <div>
        <h1 className="mood-board-heading">Destination Mood Board</h1>
        <div className="mood-board">
            {cards.map((card) => (
                <MoodBoardItem 
                key={card.id}
                color={card.color}
                image={card.image}
                description={card.description}
                />

            ))}
        </div>
    </div>
   )
};