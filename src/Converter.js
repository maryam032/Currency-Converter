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
                <div style={{marginLeft:'auto',marginRight:'auto',display:'block',color:'white',marginTop:100,backgroundColor:' #FFCA28  ',height:80,width:350}}>
                <span style={{textAlign:'left',fontSize:25,float:'left',marginLeft:8,display:'block',marginTop:14,fontWeight:'bold'}}>
                 Currency Converter
             </span>
             <img style={{borderRadius:50,display:'block',float:'right',marginTop:0,outline:'none',display:'block',width:"80px" , marginRight:0}}src={process.env.PUBLIC_URL +"/pkr.jpg"}
                 alt="Mypic" />
                    
                </div>
                    <div style={{marginLeft:'auto',marginRight:'auto',display:'block',backgroundColor:'#AD4532    ',height:250,width:350,marginTop:0,paddingTop:15}}>
                        <span style={{fontWeight:'bold',display:'block',color:'white',marginLeft:15,float:'left'}}>Converted From</span>
                        <input style={{display:'block',marginRight:10,float:'right',marginLeft:30,display:'block',marginTop:5,borderRadius:10,width:285,height:40,border:'none',outline:'none',paddingLeft:10}} type="text"  onChange={(e)=>{this.handleResult(e,'A')}}  value={this.state.fieldA} placeholder="PKR "  name="fromCurrency"/>
                        <span style={{fontWeight:'bold',display:'block',marginLeft:15,float:'left',color:'white',marginTop:10}}>Converted To</span>
                        <input style={{float:'left',marginRight:56,display:'block',marginTop:5,marginLeft:45,borderRadius:10,width:285,height:45,border:'none',outline:'none',paddingLeft:10}} type="text" onChange={(e)=>{this.handleResult(e,'B')}}  value={this.state.fieldB} placeholder="USD "  name="toCurrency"/>
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