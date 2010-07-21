# Dynamic Type/drawing Concept

## Original idea

The original type grid  
![Original type grid](./01-original-type.png)  
could be created by parsing an array of letters containing an array of points.  

ie.

    [ // S
      [10,10],
      [10,20],
      [20,20],
      [5, 15]
    ],
    
    [ // Y
      [5,15],
      [15,20],
      [20,20],
      [5, 25]
    ]
    
    // etc.
    
Then from each point, two guide squares (shown here in purple) are created in diagonal opposition to the drawn point:  
![Guide squares](./02-guide-squares.png)  
These squares are not used (and are unnecessary within a programmatic version), but serve as positioning guides.

The control squares (shown here in cyan) are placed at the diagonal edges of the guide squares:  
![Control squares](./03-control-squares.png)

Lines are then drawn (shown here in magenta) connecting the original point to a random edge of the corresponding (cyan) control square.  
This then becomes the final generated ouput.  
![Extended type grid](./04-extended-type-grid.png)

## Further ideas

- Randomly selected points could animate between the corners of it's control point (creating a morphing effect).  
  _I really want to do this one_.
- A user could drag control points around the grid.
- SydJS members could submit config files which hook into the drawing API.
- _Add your own here!_