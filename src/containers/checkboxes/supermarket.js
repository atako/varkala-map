import { connect } from 'react-redux'
import Supermarket from '../../components/checkboxes/supermarket'

const mapStateToProps = state => {
  const props = {
    appState: state.appState
  }
  return props
}

export default connect(mapStateToProps)(Supermarket)