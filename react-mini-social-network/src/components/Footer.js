import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            <footer className="page-footer darken-3">
            <div className="footer-copyright darken-4">
              <div className="container">
                <time dateTime="{{ site.time | date: '%Y' }}">&copy; 2019 copyright</time>
              </div>
            </div>
          </footer>
        
        );
  
    };
}


export default Footer;