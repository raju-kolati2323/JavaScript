let n=[2001,2002,2003,2004,2005,206,2007,2008,2009]
        let newarr=n.filter((a)=>(a%4==0 && a%100!=0)||a%400==0)
        document.write('Leap years from the given array are: '+newarr)