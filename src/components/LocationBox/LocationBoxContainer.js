import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import LocationBox from './LocationBox';

const mapStateToProps = state => {
    return {
        customLat: state.customLat,
        customLong: state.customLong
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLocationSet: (lat, long) => dispatch({
            type: actionTypes.SET_CUSTOM_LOCATION,
            payload: {
                customLat: lat,
                customLong: long
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationBox);