import React, { Component } from "react";
import "./App.css";
import "./bootstrap.min.css";

function Hero() {
  return <div className="row">
	<div className="jumbotron col-10 offset-1">
		<h1>Author Quiz</h1>
		<p>Wskaż książkę napisaną przez autora z obrazka</p>
	</div>
  </div>;
}

function Turn({author, books}) {
	return(<div className="row turn" style={{backgroundColor: "#fff"}}>
		<div className="col-4 offset-1">
			<img src={author.imageUrl} className="authorImage" alt="Author"/>
		</div>
		<div className="col-6">
			{books.map((title)=><p>{title}</p>)}
		</div>
	</div>);
}

function Continue() {
	return(<div/>);
}

function Footer() {
	return (
		<div id="footer" className="row">
			<div className="col-12">
				<p className="text-muted credit">Wszystkie obrazki pochodzą od...</p>
			</div>
		</div>
	)
}

function AuthorQuiz ({turnData}) {
	return (
		<div className="container-fluid">
			<Hero />
			<Turn {...turnData}/>
			<Continue />
	<Footer/>
		</div>
	);
}

export default AuthorQuiz;
