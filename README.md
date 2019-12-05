# Gallery
  Gallery is a fully fledged wallpaper website built with NodeJs and MongoDB. Gallery provide RESTful API services to frontend applications and can also be used as server-side application as it has its own templating and UI. Please Check the `RELEASE_STATUS` before you clone. Here is a deployed link [herokudeploy](https://ei-sgallery.herokuapp.com/)

## API collections
1. USER API
2. TYPE API
3. TAG API
4. PROFILE API
5. GALARIE API
6. DEVICE API

## USER_API
  `USER API` is for signup,login,auth operation and has a ref linking to `PROFILE_API` with JWT. CRUD operations are available.

## TYPE_API
  `TYPE API` is for adding, editing type value for Wallapers. CRUD operations are available.
  
 ## TAG_API
  `TAG API` is for adding, editing tag values for Wallapers. CRUD operations are available.
  
 ## PROFILE_API
  `PROFILE API` is for adding user information as profile and has a ref linking to `USER_API` with JWT. CRUD operations are available.
  
 ## GALARIE_API
  `GALARIE API` is for uploading wallpapers and selecting features from other api. CRUD operations are available.

## DEVICE_API
  `DEVICE API` is for adding devices,editing device to use in `GALARIE_API`. CRUD operations are available.
  

## RELEASE_STATUS:IN PROGRESS
## RELEASE_CODE: GDEV013
 Sorry this project is not completely done yet and most features are available for developement service. If you are considering about cloning this project please wait till it's completed.

## API OPTIONS
Use the following routes for making requests.
    
```bash
   GET => {
       deviceapi/list
       galarieapi/list
       profileapi/list
       tagapi/list
       typeapi/list
       userapi/list
   }

    GET => {
       deviceapi/lists
       galarieapi/lists
       profileapi/lists
       tagapi/lists
       typeapi/lists
       userapi/lists
   }


   {
       ...
   }
   
   DELTE => {
        deviceapi/delete
       galarieapi/delete
       profileapi/delete
       tagapi/delete
       typeapi/delete
       userapi/delete
   }
```


