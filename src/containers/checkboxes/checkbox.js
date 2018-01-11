import { connect } from 'react-redux'
import Checkbox from '../../components/checkboxes/checkbox'


const mapStateToProps = state => {
  const props = {
    appState: state.appState
  }
  return props
}

export default connect(mapStateToProps)(Checkbox)