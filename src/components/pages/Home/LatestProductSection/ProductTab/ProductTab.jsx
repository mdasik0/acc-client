import "./ProductTab.css";
const ProductTab = () => {
  const products = [
    {
      _id: "1",
      name: "Tablet T1",
      modelNo: "T123",
      description: "Versatile tablet for work and entertainment on the go.",
      features: [
        "High-resolution display",
        "Long battery life",
        "Stylus support",
      ],
      price: 499.99,
      rating: 4.5,
      colors: ["Silver", "Space Gray"],
      technicalSpecification: {
        dimensions: "9.7 inches",
        weight: "1.1 lbs",
        processor: "Quad-core",
      },
      pictureGallery: ["tablet_t1_1.jpg", "tablet_t1_2.jpg", "tablet_t1_3.jpg"],
      support: {
        warranty: "2 years",
        customerService: "support@example.com",
      },
      image: "tablet_t1_main.jpg",
    },
    {
      _id: "2",
      name: "Tablet T2",
      modelNo: "T456",
      description: "Slim and lightweight tablet with a vibrant display.",
      features: ["Full HD display", "Compact design", "Fast performance"],
      price: 699.99,
      rating: 4.7,
      colors: ["Gold", "Rose Gold"],
      technicalSpecification: {
        dimensions: "8.9 inches",
        weight: "0.9 lbs",
        processor: "Octa-core",
      },
      pictureGallery: ["tablet_t2_1.jpg", "tablet_t2_2.jpg", "tablet_t2_3.jpg"],
      support: {
        warranty: "1 year",
        customerService: "support@example.com",
      },
      image: "tablet_t2_main.jpg",
    },
    {
      _id: "3",
      name: "Tablet T3",
      modelNo: "T789",
      description: "Versatile tablet for work and entertainment on the go.",
      features: [
        "High-resolution display",
        "Long battery life",
        "Stylus support",
      ],
      price: 599.99,
      rating: 4.3,
      colors: ["Gold", "Silver"],
      technicalSpecification: {
        dimensions: "10.1 inches",
        weight: "1.2 lbs",
        processor: "Octa-core",
      },
      pictureGallery: ["tablet_t3_1.jpg", "tablet_t3_2.jpg", "tablet_t3_3.jpg"],
      support: {
        warranty: "1 year",
        customerService: "support@example.com",
      },
      image: "tablet_t3_main.jpg",
    },
    {
      _id: "4",
      name: "Tablet T4",
      modelNo: "T101",
      description: "Compact and powerful tablet for productivity on the go.",
      features: ["Fast processor", "Large storage", "Dual speakers"],
      price: 799.99,
      rating: 4.8,
      colors: ["Black", "Blue"],
      technicalSpecification: {
        dimensions: "9.5 inches",
        weight: "1.0 lbs",
        processor: "Hexa-core",
      },
      pictureGallery: ["tablet_t4_1.jpg", "tablet_t4_2.jpg", "tablet_t4_3.jpg"],
      support: {
        warranty: "2 years",
        customerService: "support@example.com",
      },
      image: "tablet_t4_main.jpg",
    },
    {
      _id: "5",
      name: "Tablet T5",
      modelNo: "T555",
      description: "Entertainment-focused tablet with a vibrant display.",
      features: ["HD screen", "Dual speakers", "Large battery"],
      price: 499.99,
      rating: 4.5,
      colors: ["White", "Silver"],
      technicalSpecification: {
        dimensions: "8.5 inches",
        weight: "0.8 lbs",
        processor: "Quad-core",
      },
      pictureGallery: ["tablet_t5_1.jpg", "tablet_t5_2.jpg", "tablet_t5_3.jpg"],
      support: {
        warranty: "1 year",
        customerService: "support@example.com",
      },
      image: "tablet_t5_main.jpg",
    },
  ];

  return (
    <div className="max-w-[80%] mx-auto">
      
    </div>
  );
};

export default ProductTab;
