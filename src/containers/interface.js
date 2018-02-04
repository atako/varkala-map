import { connect } from 'react-redux'
import Component from '../components/interface'

const mapStateToProps = state => {
  const props = {
    ui: state.ui,
    local: state.local
  }
  return props
}

export default connect(mapStateToProps)(Component)