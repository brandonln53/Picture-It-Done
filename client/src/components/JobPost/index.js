import React from "react";
export function Image(props) {
    return(
        <div {...props}>
            <p>This is a placeholder</p>
        </div>
    )
}

export function List({ children }) {
    return(
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    )
}

export function ListItem({ children }) {
return <li className="list-group-item">{children}</li>
}

export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Brick({data}){
    console.log(data)
    return(
<<<<<<< HEAD
        <div>
            <article className="par" id="background" style={{width: "100%", backgroundColor: "wheat", margin: "10px"}}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <ul>
                    <li>email: {data.email}</li>
                    <li>phone number: {data.phone}</li>
                </ul>
                <img className="img" style={{width:"29%", float: "right", marginLeft: "20px", height: "200px"}} src={data.image} alt={`${data.user}'s image of their problem`} />
            </article>
=======
       
            <div  className="par" id="background" style={{width: "100%", backgroundColor: "wheat", margin: "10px",family:"Times,Times New Roman,serif"}}>
                <h4>Title:{data.title}</h4>
                <p>Description:{data.description}</p>
                <p>Phone Number:{data.phone}</p>
                <p>Email:{data.email}</p>


                <img className="img" style={{width:"20%", float: "right", marginLeft: "20px", height: "150px"}} src={data.image} alt={`${data.user}'s image of their problem`} />
            
>>>>>>> master
        </div>
    );
}
  


export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ size, children }) {
    return (
      <div
        className={size
          .split(" ")
          .map(size => "col-" + size)
          .join(" ")}
      >
        {children}
      </div>
    );
}
