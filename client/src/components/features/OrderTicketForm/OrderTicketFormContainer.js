import { connect } from 'react-redux';
import { addSeatRequest, getRequests, getSeats } from '../../../redux/seatsRedux'; //new
// import { addSeatRequest, getRequests, getSeats, loadSeats } from '../../../redux/seatsRedux'; //new
import OrderTicketForm from './OrderTicketForm';

const mapStateToProps = state => ({
  requests: getRequests(state), 
  seats: getSeats(state), //new
});

const mapDispatchToProps = dispatch => ({
  addSeat: (seat) => dispatch(addSeatRequest(seat)),
  // loadSeats: (seat) => dispatch(loadSeats(seat)), //new
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderTicketForm);