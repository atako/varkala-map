import { connect } from 'react-redux'
import Component from '../components/portal'

const mapStateToProps = state => {
  const props = {
    ui: state.ui,
    portal: state.portal
  }
  return props
}

export default connect(mapStateToProps)(Component)