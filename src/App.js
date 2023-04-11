import React, { Component } from 'react';
import './App.css';
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      sex: null,
      selectbox: null,
      confirm: null,
    
      errors: {
        email: '(ใส่ Email ของคุณให้ถูกต้อง)',
        password: '(กรอกรหัสผ่านอย่างน้อย 6 อักขระ)',
        sex: '(กรุณาเลือกเพศ)',
        selectbox: '(เลือกเกมที่คุณต้องการ)',
        confirm: '(ยืนยันข้อมูล)',
      
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      alert('ข้อมูลถูกต้องครบถ้วน');
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  }
  handleChange(event) {
    let { name, value } = event.target;
    let errors = this.state.errors;
    console.log(name, value);
    switch (name) {
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : '(กรุณาใส่ Email ของคุณให้ถูกต้อง)';
        break;
      case 'password':
        errors.password = value.length < 6 ? '(กรุณากรอกรหัสผ่านอย่างน้อย 6 อักขระ)' : '';
        break;
      case 'sex':
        errors.sex = value.length > 0 ? '' : '(กรุณาเลือกเพศ)';
        break;
      case 'selectbox':
        errors.selectbox = value.length > 0 ? '' : '(กรุณาเลือกเกม)';
        break;
      case 'confirm':
        errors.confirm = value.length > 0 ? '' : '(กรุณายืนยันข้อมูล)';
        break;
      default:
        break;
    }
    this.setState({
      errors,
      [name]: value
    });
  }
  render() {
    console.log(this.state);
    let { errors } = this.state;
    return (
      
      <div>
        
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email </label>
            <input type="email" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
            {errors.email.length > 0 && <small className="form-text text-muted">{errors.email}</small>}
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
            {errors.password.length > 0 && <small className="form-text text-muted">{errors.password}</small>}
          </div>

          <hr/>
         
          <p>กรุณาเลือกเกม</p>
          <div class="form-group">
            <select id="inputFood" name="selectbox" onChange={this.handleChange}>
              <option selected>เลือกเกม</option>
              <option value="PUBG">PUBG</option>
              <option value="Genshin Impact">Genshin Impact</option>
              <option value="GTAV">GTAV</option>
              <option value="Rust">Rust</option>
              <option value="Valorant">Valorant</option>
              <option value="RainbowSixSiege">RainbowSixSiege </option>
            </select>
            {errors.selectbox.length > 0 && <small className="form-text text-muted">{errors.selectbox}</small>}
          </div>

          <hr/>
          
          <div class="container">
            <div class="row">
              <div class="col-4">
                <p>เลือกเพศ</p>
                
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="sex" id="gridRadios1" value="ชาย" onChange={this.handleChange} />
                    <label class="form-check-label" for="gridRadios1">
                      ชาย
                    </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="sex" id="gridRadios5" value="หญิง" onChange={this.handleChange} />
                    <label class="form-check-label" for="gridRadios5">
                      หญิง
                    </label>
                </div>
                {errors.sex.length > 0 && <small className="form-text text-muted">{errors.sex}</small>}
              </div>
            </div>
          </div>

          <hr/>

          <p>คุณรู้จักเกมนี้ได้อย่างไร</p>
          <div class="container">
            
           
              <div class="col">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="Social[]" id="gridCheck1"/>
                    <label class="form-check-label" for="gridCheck1">
                    Facebook
                    </label>
                </div>
              </div>
          </div>

            <div class="row">
              <div class="col">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="Social[]" id="gridCheck2" />
                    <label class="form-check-label" for="gridCheck2">
                    Youtube
                    </label>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="Social[]" id="gridCheck3" />
                    <label class="form-check-label" for="gridCheck3">
                    Twitch
                    </label>
                </div>
              </div>
            </div>
           
          <hr/>
        
          <br/>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" name="confirm" id="exampleCheck5" value="confirm" onChange={this.handleChange} />
            <label class="form-check-label" for="exampleCheck5">ยืนยันข้อมูล</label>
            <br/>
            {errors.confirm.length > 0 && <small className="form-text text-muted">{errors.confirm}</small>}
          </div>
          <br/>
          <button type="submit" className="btn btn-primary">Send</button>
  
        </form>
      </div>
    );
  }
}
export default App;