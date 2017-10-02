//The parent container
container = new ParentContainer();

//Blue Border
new Shape(rectangle, container, [0, 1, 0, 0, 1, 0, 0, 0, 0, 0], new Rgba("#536bfe"), new Stroke(5, StrokePosition.Inside));

//Tutorial List Fieldset
new Fieldset(container, [0, 0, 0, 0, 1, 0, 11, 11, 380, 11], "");
    //White Background
    new Shape(rectangle, container.child[1], [0, 1, 0, 0, 1, 0, 7, 7, 7, 7], new Rgba("#ffffff"));
    //Short Shadow Left
    new Shape(rectangle, container.child[1], [0, 0, 0, 1, 1, 1, 7, -7, 7, 17], new Gradient(GradientStyle.Linear, [new GradientColor(new Rgba("#000000", 0.4), 0), new GradientColor(new Rgba("#000000", 0), 1)], 0, 0.5, 0.5, 0.5));
    //Short Shadow Top
    new Shape(rectangle, container.child[1], [1, 1, 1, 0, 0, 0, -7, 7, 17, 7], new Gradient(GradientStyle.Linear, [new GradientColor(new Rgba("#000000", 0.4), 0), new GradientColor(new Rgba("#000000", 0), 1)], -90, 0.5, 0.5, 0.5));
    //Hightlight Right
    new Shape(rectangle, container.child[1], [1, 1, 1, 0, 1, 0, -7, 7, 2, 7], new Rgba("#ffffff"));
    //Highlight Bottom
    new Shape(rectangle, container.child[1], [0, 1, 0, 1, 1, 1, 7, -7, 7, 2], new Rgba("#ffffff"));
    //Tutorial List Container
    tutorialList = new Container(container.child[1], [0, 1, 0, 0, 1, 0, 7, 7, 7, 7]);tutorialList.container.style.overflow = "auto";
    //Decalre the variable that will store the current selected link
    selectedLink = null;
    //Define the hierarchical root for the tutorial list
    root = new HierarchicalRoot(tutorialList, [0, 0, 0, 0, 0, 0, 15, 12, 0, 0]);
        //Active Directory
        ActiveDirectory();
        //DNS
        DNS();
        //DHCP
        DHCP();
        //Certificates
        Certificates();
        //RRAS
        RRAS();
        //Exchange
        Exchange();

    //Long Shadow Left
    new Shape(rectangle, container.child[1], [0, 0, 0, 0, 1, 0, 7, 7, 7, 24], new Gradient(GradientStyle.Linear, [new GradientColor(new Rgba("#000000", 0.4), 0), new GradientColor(new Rgba("#000000", 0), 1)], 0, 0.5, 0.5, 0.5));
    //Long Shadow Top
    new Shape(rectangle, container.child[1], [0, 1, 0, 0, 0, 0, 7, 7, 24, 7], new Gradient(GradientStyle.Linear, [new GradientColor(new Rgba("#000000", 0.4), 0), new GradientColor(new Rgba("#000000", 0), 1)], -90, 0.5, 0.5, 0.5));


//Title IFrame
titleIFrame = new IFrame(container, [0, 1, 0, 0, 0, 0, 398, -5, 18, 105], "");titleIFrame.iframe.scrolling = "no";

//Bron's Tutorials.com Label
new Label(container, [0, 0, 0, 0, 0, 0, 400, 18, 0, 0], new Gradient(GradientStyle.Linear, [new GradientColor(new Rgba("#ffffff"), 0.3), new GradientColor(new Rgba("#a2a2a2"), 1)], -90, 0.5, 0.5, 0.5), "Bron'sTutorials.com", new Font(FontFamily.Impact, 27), Alignment.Left, LabelBaseline.Middle, new Stroke(4, null, new Gradient(GradientStyle.Linear, [new GradientColor(new Rgba("#2960fe"), 0.5), new GradientColor(new Rgba("#4b4b4b"), 1)], -90, 0.5, 0.5, 0.5)));

//View Window Fieldset
new Fieldset(container, [0, 1, 0, 0, 1, 0, 400, 53, 11, 11], "");
    //White Background
    new Shape(rectangle, container.child[4], [0, 1, 0, 0, 1, 0, 12, 52, 7, 7], new Rgba("#ffffff"));
    //Short Shadow Top
    new Shape(rectangle, container.child[4], [1, 1, 1, 0, 0, 0, -7, 52, 17, 7], new Gradient(GradientStyle.Linear, [new GradientColor(new Rgba("#000000", 0.4), 0), new GradientColor(new Rgba("#000000", 0), 1)], -90, 0.5, 0.5, 0.5));
    //View Window IFrame
    viewWindowIFrame = new IFrame(container.child[4], [0, 1, 0, 0, 1, 0, 17, 52, 7, 7], "");
    //Long Shadow Left
    new Shape(rectangle, container.child[4], [0, 0, 0, 0, 1, 0, 12, 52, 7, 7], new Gradient(GradientStyle.Linear, [new GradientColor(new Rgba("#000000", 0.4), 0), new GradientColor(new Rgba("#000000", 0), 1)], 0, 0.5, 0.5, 0.5));
    //Long Shadow Top
    new Shape(rectangle, container.child[4], [0, 1, 0, 0, 0, 0, 12, 52, 24, 7], new Gradient(GradientStyle.Linear, [new GradientColor(new Rgba("#000000", 0.4), 0), new GradientColor(new Rgba("#000000", 0), 1)], -90, 0.5, 0.5, 0.5));
