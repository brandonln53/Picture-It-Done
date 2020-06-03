import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Image, List, ListItem, Col, Row } from '../../components/JobPost';
import API from '../../utils/API';

const ViewJobs = () => {
	
	const[jobs, setJobs] = useState([])

	useEffect(() => {
		loadJobs()
	}, [])

	function loadJobs() {
		API.getJobs()
			.then(res => 
				setJobs(res.data)
			)
			.catch(err => console.log(err));
	}

	return (
		<Container fluid>
			<Row>
				<Col size="md-6 sm-12">
					{jobs.length ? (
						<List>
							<h1>This is the list</h1>
							<h1>{console.log(jobs)}</h1>
							{jobs.map(job => (
								<ListItem key={job._id}>
									<Link to={"/jobs/" + job._id}>
										<strong>
										{job.title}
										{job.description}
										{job.user}
										{job.image}
										</strong>
									</Link>
								</ListItem>
							))}
						</List>
					) : (
						<h3>No results to Display</h3>
					)}
				</Col>
			</Row>
		</Container>
	)
}


export default ViewJobs;


// import './ViewJobs.css';

// import image1 from './images/p1.jpg';
// import image2 from './images/p2.jpg';
// import image3 from './images/p3.png';
// import image4 from './images/p4.jpg';
// import image5 from './images/p5.jpg';
// class ViewJobs extends React.Component {
//     render(){
//       return (
//     <>
//     	<div>	  
//     		{/* <h1>View Jobs</h1> */}
//     <article class="par">

// 	<a href="https://i.stack.imgur.com/EJL2S.jpg"><img class="img" src={image2} alt="image2" /></a>
// 	<header>
//     <h3>Plumber</h3>
// 	</header>
// 	<p>This pipe under my kitchen sink has a big crack in the area circled in yellow. (It's on the back side so it isn't visible in the photo.) Can I simply unscrew the nut at the top that I circled in red to replace the pipe? I'm afraid to just go ahead and try in the fear that I will put my kitchen sink out of commission. I'm already ok with disconnecting the hand-tightened nut at the bottom.So i need some professional help,Please contact me at your earliest convenience,Thanks

// 	</p>
// 	<ul class="actions special">
// 		<li>Email-Jaredsmith@yahoo.com</li>
//         <li>Phone-303-5677-2343</li>
// 		<li>Posted Date-6/2/2020</li>
// 	</ul>
// 	</article>
//   </div>
//         </>
//       );
//     }
//   }
  
//   export default ViewJobs;

