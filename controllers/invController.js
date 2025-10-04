const invModel = require("../models/inventory-model")
const utilities = require("../utilities")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

//This is my week 3 addition for the detail view.
async function buildDetailView(req, res, next) {
  try {
    const invId = parseInt(req.params.invId);
    const vehicle = await inventoryModel.getVehicleById(invId);

    if (!vehicle) {
      return next(new Error('Vehicle not found'));
    }

    const html = utilities.buildVehicleDetailHTML(vehicle);
    res.render('./inventory/detail', {
      title: `${vehicle.inv_make} ${vehicle.inv_model}`,
      html,
    });
  } catch (error) {
    next(error);
  }
}



module.exports.buildByClassificationId = invCont.buildByClassificationId;  
module.exports.buildDetailView = buildDetailView;