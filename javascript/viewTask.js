document.getElementById('if28b').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homePage' ;}};document.getElementById('ipazs').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createProject' ;}};document.getElementById('ip0lr').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createTask' ;}};document.getElementById('i1hvi').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createWorkpackage' ;}};document.getElementById('i8xqk').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createEmployee' ;}};document.getElementById('iyhvh').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createDeliverable' ;}};document.getElementById('i66eh').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewTasks' ;}};document.getElementById('isjdt').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewEmployees' ;}};document.getElementById('iwq7u').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewWorkpackages' ;}};document.getElementById('ihfax').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewDeliverables' ;}};document.getElementById('ihz33').onclick = (event) => {
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
            .contains(document.getElementById("ihz33")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateTask/' + transitionId;}};document.getElementById('izi4y').onclick = (event) => {
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
            .contains(document.getElementById("izi4y")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewTask/' + transitionId;}};document.getElementById('iga5c').onclick = (event) => {
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
            .contains(document.getElementById("iga5c")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewTask/' + transitionId;}};document.getElementById('infuw').onclick = (event) => {
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
            .contains(document.getElementById("infuw")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewTask/' + transitionId;}};document.getElementById('i2rmi').onclick = (event) => {
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
            .contains(document.getElementById("i2rmi")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewTask/' + transitionId;}};document.getElementById('i6jx7').onclick = (event) => {
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
            .contains(document.getElementById("i6jx7")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewTask/' + transitionId;}};window.onload = () => {};