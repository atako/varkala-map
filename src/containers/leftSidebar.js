import { connect } from 'react-redux'
import Component from '../components/leftSidebar'

const mapStateToProps = state => {
  const props = {
    ui: state.ui
  }
  return props
}

export default connect(mapStateToProps)(Component)