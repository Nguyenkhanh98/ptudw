# NOTE
Using node version v14.16.1

Để khởi chạy dự án, mình sử dụng yarn thay vì npm để tránh lỗi dependency version. 
 + Khởi động backend:
    step1 : cd backend, run from cmd : yarn install 
    step 2: To migrate table, from cmd:  yarn db:migrate
    step 3: seeds data to database, from cmd: yarn db:seed
    step 4: cmd: yarn start
 + Khởi động react app:
    step1 : cd reactApp,   run from cmd: yarn install
    step2  :  cmd: yarn start

