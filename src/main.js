import { jsPDF } from "jspdf"

const doc = new jsPDF()

doc.setFontSize(22)
doc.text("A title on top of the page", 20, 20)

doc.setFontSize(16)
doc.text("Welcome to the wonderful world of front-end PDF generation", 20, 30)

doc.save()