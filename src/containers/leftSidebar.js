import { connect } from 'react-redux'
import Component from '../components/leftSidebar'

const mapStateToProps = state => {
  const props = {
    ui: state.ui,
    appState: state.appState,
    local: state.local
  }
  return props
}

export default connect(mapStateToProps)(Component)