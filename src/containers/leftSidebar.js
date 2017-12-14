import { connect } from 'react-redux'
import Component from '../components/leftSidebar'

const mapStateToProps = state => {
  const props = {
    ui: state.ui,
    appState: state.appState
  }
  return props
}

export default connect(mapStateToProps)(Component)