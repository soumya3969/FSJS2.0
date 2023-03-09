// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

1
  function getTimestamp1 () {
    
    const d = new Date();
    
    return `${(d.getFullYear())}-${(d.getMonth()+1)}-${(d.getDate())} ${(d.getHours())}:${(d.getMinutes())}:${(d.getSeconds())}`;
  }
  console.log(getTimestamp1());
//   op-2023-3-9 20:49:45

2
    function getTimestamp2 () {
    
    const s = new Date();
    
    return `${(s.getDate())}-${(s.getMonth())}-${(s.getFullYear())} ${(s.getHours())}:${(s.getMinutes())}:${(s.getSeconds())}`;
  }
  console.log(getTimestamp2());
//   op-9-2-2023 20:49:45


3
    function getTimestamp3 () {
    
    const s = new Date();
    
    return `${(s.getDate())}/${(s.getMonth())}/${(s.getFullYear())} ${(s.getHours())}:${(s.getMinutes())}:${(s.getSeconds())}`;
  }
  console.log(getTimestamp3());
//   op-9/2/2023 20:49:45