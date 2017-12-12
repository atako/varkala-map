import { connect } from 'react-redux'
import Beach from '../../components/checkboxes/beach'

const mapStateToProps = state => {
  const props = {
    appState: state.appState
  }
  return props
}

export default connect(mapStateToProps)(Beach)