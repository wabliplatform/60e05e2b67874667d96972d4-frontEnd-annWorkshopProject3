let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';document.getElementById('i3hm').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homePage' ;}};document.getElementById('iuegv').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createProject' ;}};document.getElementById('i0us1').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createTask' ;}};document.getElementById('iaw4g').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createWorkpackage' ;}};document.getElementById('ika04e').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createEmployee' ;}};document.getElementById('in69a').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewTasks' ;}};document.getElementById('ilqkve').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewEmployees' ;}};document.getElementById('irdjc9').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewWorkpackages' ;}};document.getElementById('i0er7b').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i0er7b")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewTask/' + transitionId;}};document.getElementById('igekz').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homePage' ;}};document.getElementById('iv0pcc').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iv0pcc")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewTask/' + transitionId;}};document.getElementById('iez4f5').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homePage' ;}};document.getElementById('ifn3df').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ifn3df")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewTask/' + transitionId;}};document.getElementById('ia3n6k').onclick = (event) => {
    event.preventDefault();
    let taskId = window.location.pathname.replace('/viewTasks/','');
      if(taskId === '/viewTasks' || taskId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ia3n6k")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            taskId = value._id;
            parentId = key;
          }
        });
      }
    apiTaskApi.deletetask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/homePage' ;}}});};document.getElementById('i38rcg').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i38rcg")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewTask/' + transitionId;}};document.getElementById('iv5pek').onclick = (event) => {
    event.preventDefault();
    let taskId = window.location.pathname.replace('/viewTasks/','');
      if(taskId === '/viewTasks' || taskId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iv5pek")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            taskId = value._id;
            parentId = key;
          }
        });
      }
    apiTaskApi.deletetask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/homePage' ;}}});};document.getElementById('i7g1v').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i7g1v")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewTask/' + transitionId;}};document.getElementById('i7mprs').onclick = (event) => {
    event.preventDefault();
    let taskId = window.location.pathname.replace('/viewTasks/','');
      if(taskId === '/viewTasks' || taskId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i7mprs")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            taskId = value._id;
            parentId = key;
          }
        });
      }
    apiTaskApi.deletetask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/homePage' ;}}});};window.onload = () => {};