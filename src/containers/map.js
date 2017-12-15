import { connect } from 'react-redux'
import Component from '../components/map'
import * as actionCreators from '../actions'

const mapStateToProps = state => {
  const props = {
    ui: state.ui,
    objects: state.objects
  }
  return props
}

export default connect(
  mapStateToProps,
  actionCreators
)(Component)