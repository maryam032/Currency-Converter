import React from 'react' 
import './Button.css'

class Converter extends React.Component{
    constructor (props)
    {
        super(props);
        this.state=({
            fromCurrency:'',
            toCurrency:'$',
            amount:1,
            result:''
            
        })
    }
    
    handleResult=(e, field)=>{
        if(field ==='A')
        {  const newvalueA=e.target.value;

            this.setState({
                fieldA: newvalueA,
                fieldB: newvalueA/161.12
                })
            }
            else if(field ==='B')
            {  const newvalueB=e.target.value;
    
                this.setState({
                    
                    fieldA: newvalueB*161.12,
                    fieldB: newvalueB
                    })
                }
        }
        handleReset=()=>{
            this.setState({
                    fieldA:'',
                    fieldB:''
                   
            })

        }
    render()
    {
        
        return(
            <div>
                <div style={{marginLeft:'auto',marginRight:'auto',display:'block',marginTop:100,backgroundColor:'yellow',border:'1px solid black',height:80,width:400}}>
                    <h1>
                        Currency Converter
                    </h1>
                </div>
                    <div style={{marginLeft:'auto',marginRight:'auto',display:'block',backgroundColor:'green',height:400,width:400,marginTop:0,paddingTop:20}}>
                        <input style={{float:'left',marginRight:'auto',marginLeft:30,display:'block',marginTop:45,borderRadius:10,width:180,height:50,border:'none',outline:'none',paddingLeft:20}} type="text"  onChange={(e)=>{this.handleResult(e,'A')}}  value={this.state.fieldA} placeholder="Enter amount: "  name="fromCurrency"/>
                        <input style={{float:'left',marginRight:'auto',marginLeft:30,display:'block',marginTop:45,borderRadius:10,width:180,height:50,border:'none',outline:'none',paddingLeft:20}} type="text" onChange={(e)=>{this.handleResult(e,'B')}}  value={this.state.fieldB} placeholder=" answer: "  name="toCurrency"/>
                        <input  className="Button" type="button" value="Reset" onClick={this.handleReset}/> 
                     </div>
                <div>
                    <h3>{this.state.result}</h3>
                </div>
             </div>
        )
    }
}
export default Converter;