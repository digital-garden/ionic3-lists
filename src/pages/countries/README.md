##   F
#    I   1)  /countries.ts    
# 	 L	 2)	 /countries.html
# 	 E	 3)	 /providers/dat-b.ts 
##   S
#
#dat-b.ts
#   		 - import Observable from'rxjs/Observable' &&
#        - import 'rxjs/add/operator/<catch,map>'  
#      	 - declare variable && create RESTful web service:    	  
#								private apiUrl = 'https://ad.dr'; 
#      	  			getData(): Observable<string[]> {
#  								return this.http.get(this.apiUrl)
#                 .map(this.extractData)
#                 .catch(this.handleError); 		} 
#      	 - create extraction method: 
#								private extractData(res: Response) {
# 					  		let body = res;
# 		 						return body || { };							 }
#        - create errorhandling method (see page)
#      	   
#countries.ts
#				 - import provider && add to constructor
#      	 - declare datAPI array && errMsg string pre-constructor
#      	 - run this.getData() with ionViewDidLoad 
#      	 - create subscriber method  
#								getData() {
#   						 	this.rest.getData()
#      						.subscribe(
#        					countries => this.datAPI = datAPI,
#        					error =>  this.errMsg = <any>error); }
#
#countries.html
#				 - loop && extrapolate data 
#      	  			<ion-item *ngFor="let d of datAPI">
#      	    			<h2>{{d.catagory}}</h2>
#						 			<img src="{{c.logo}}">
#      	  			</ion-item>
