import { connect } from 'react-redux'
import Component from '../components/map'

const mapStateToProps = state => {
  const props = {
    ui: state.ui,
    objects: state.objects
  }
  return props
}

export default connect(mapStateToProps)(Component)