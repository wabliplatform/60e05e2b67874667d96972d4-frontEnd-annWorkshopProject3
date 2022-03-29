document.getElementById('i3hm').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homePage' ;}};document.getElementById('iuegv').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createProject' ;}};document.getElementById('i0us1').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createTask' ;}};document.getElementById('iaw4g').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createWorkpackage' ;}};document.getElementById('ika04e').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createEmployee' ;}};document.getElementById('ixgftl').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createDeliverable' ;}};document.getElementById('in69a').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewTasks' ;}};document.getElementById('ilqkve').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewEmployees' ;}};document.getElementById('irdjc9').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewWorkpackages' ;}};document.getElementById('ikbhek').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewDeliverables' ;}};document.getElementById('i0er7b').onclick = (event) => {
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
     location.href= '/viewTask/' + transitionId;}};document.getElementById('iv0pcc').onclick = (event) => {
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
     location.href= '/viewTask/' + transitionId;}};document.getElementById('ifn3df').onclick = (event) => {
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
     location.href= '/viewTask/' + transitionId;}};document.getElementById('i38rcg').onclick = (event) => {
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
     location.href= '/viewTask/' + transitionId;}};document.getElementById('i7g1v').onclick = (event) => {
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
     location.href= '/viewTask/' + transitionId;}};window.onload = () => {};