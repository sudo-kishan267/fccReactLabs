const { useState } = React;

export const ColorPicker = () => {
    const [currentColor , setCurrentColor] = useState("#ffffff");



    const handleColorChange = (e)=> {
            console.log(e.target.value);
            setCurrentColor(e.target.value);
    };
    
    
    return (
        <div id="color-picker-container" style={{ backgroundColor: currentColor  }}>
            <p className="line">Choose a color from the box for the background.</p>
            <input type="color" id="color-input" onChange={handleColorChange} />
        </div>
    );
};