import PropTypes from 'prop-types'
import React,{ Component } from "react"
import { withRouter } from 'react-router'

class AddDayForm extends Component {
    constructor({props}){
        super(props)
         this.resortRef = React.createRef();
         this.dateRef = React.createRef();
         this.powderRef = React.createRef();
         this.backcountryRef = React.createRef();
    }


    submit=(e)=> {
         e.preventDefault()
         this.props.onNewDay({
             resort: this.resortRef.current.value,
             date: this.dateRef.current.value.toString(),
             powder: this.powderRef.current.checked,
             backcountry: this.backcountryRef.current.checked
         })
         const addAnother = window.confirm(`${this.resortRef.current.value} on ${this.dateRef.current.value.toString()} added. Add another?`)
         if (!addAnother) {
             this.props.history.push('/')
         }

         this.resortRef.current.value = ''
         this.dateRef.current.value = ''
         this.powderRef.current.checked = false
         this.backcountryRef.current.checked = false
    }
    render() {
    return (
        <form onSubmit={this.submit} className="add-day">

               <label htmlFor="date">Resort Name</label>
                    <input id="resort"
                      type="text"
                      ref={this.resortRef}
                      required/>

               <div>
               <label htmlFor="date">Date</label>
               <input id="date"
                      type="date"
                      ref={this.dateRef}
                      required/>
               </div>
               <div>
                   <input id="powder-day"
                          ref={this.powderRef}
                          type="checkbox"/>
                   <label htmlFor="powder-day">Powder</label>
               </div>

               <div>
                   <input id="backcountry-day"
                          ref={this.backcountryRef}
                          type="checkbox"/>
                   <label htmlFor="backcountry-day">Backcountry</label>
               </div>

               <button>Add Day</button>

           </form>
           )
    }
  }

AddDayForm.propTypes = {
    suggestions: PropTypes.array,
    onNewDay: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    router: PropTypes.object
}
  export default withRouter(AddDayForm)
