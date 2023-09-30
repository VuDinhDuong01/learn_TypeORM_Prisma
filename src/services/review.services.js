const db = require('../models/connectDatabase/connect')

const reviewServices = {
    getAllReviews: async () => {
        const response = await db.query('SELECT * FROM reviews')
        return {
            message: "get all reviews successfully",
            data: response.rows
        }
    },
    getReviews: async (id_review) => {
        console.log(id_review)
        const response = await db.query('SELECT * FROM reviews rev  INNER JOIN restaurants res ON rev.id_review_restaurant = res.id WHERE id_review=$1',[id_review])
        return {
            message: "get reviews successfully",
            data: response.rows
        }
    },

    createReview: async ({ id_review_restaurant, user_name, review, start }) => {
        await db.query('INSERT INTO reviews(id_review_restaurant, user_name , review , start) VALUES($1,$2,$3,$4)', [id_review_restaurant, user_name, review, start])
        return {
            message: "create review successfully"
        }
    }
}

module.exports = reviewServices

// tính giá trịn đơn hàng trung bình theo mỗi nhà cung cấp sp
//select  supplierId, AVG(price) from  group by supplierId
// select categoryId , sum(unitsStock) from product group by categoryId
// select shipCity , shipRegion , min(), max from ORDER group by shipCity, shipRegion
// select Region , count(employeeId) from EmployeeId group by Region

//Having 
// lọc ra những khách hàng nào đã đặt nhiều hơn 20 đơn hàng
// select CustomerId , count(orderId) where Order group by customerId having count(orderId) > 20
// lọc ra những nhà cung cấp sản phẩm có tổng số lượng hàng trong kho lớn hơn 30 và có giá trị trung bình đơn giá có giá trị dưới 50
// select supplierId , sum(untidstok ), avg(imotprice) from product groupby supplierId having sum(unit) > 30 and avg(unit) < 50
// hãy cho biết tổng số vận chuyển của từng tháng , trong nửa năm sau của 1996 
// select MONTH(shipperDate), sum(freight) from order where 
// shipperDate between '1996-07-01' and '1996-12-01' group by Month(shipperDate) 
// hãy lọc ra những thành phố có số lượng đơn hàng >16 và sort theo tổng số lượng đó
// select shipCity , count(orderId) from order grocount(orderId) > 16up by shipCity having  order by count(orderId) asc
