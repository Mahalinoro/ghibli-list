import '../style/Card.css';
import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickMovie() {
    this.setState({isModalOpen: true});
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-introduction'>
              <div className='modal-img'>
                <img src={this.props.urlImage}/>
              </div>
              <div className='modal-text'>
                <h2>{this.props.title}</h2>
                <p>{this.props.date}</p>
                <br></br>
                <h2>Synopsis:</h2>
                <p>{this.props.description}</p>
                <button className='modal-close-btn' onClick={() => this.handleClickClose()}>close</button>
              </div>              
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="card-container">
        <div className="card-image" style={{backgroundImage:`url(${this.props.urlImage})`}}>
        </div>
        <div className="card-text">
          <h4>{this.props.title}</h4>
          <p>{this.props.date}</p>
        </div>
        <div className="card-button">
          <button onClick={() => {this.handleClickMovie()}}>View</button>
        </div>
        {modal}
      </div>
    );
  }
}

// export default Lesson;

// function Card(props) {
//   return (
//     <div className="card-container">
//       <div className="card-image" style={{backgroundImage:`url(${props.urlImage})`}}>
//       </div>
//       <div className="card-text">
//         <h4>{props.title}</h4>
//         <p>{props.date}</p>
//       </div>
//       <div className="card-button">
//         <button onClick={handleClickMovie}>View</button>
//       </div>
//     </div>
//   );
// }

export default Card;
