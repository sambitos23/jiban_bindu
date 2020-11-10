import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Grid, Icon } from '@material-ui/core';
import PrimarySearchAppBar from './navbar';
import PrimarySearchAppBar2 from './navbar2';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '15%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#E7ECEF',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function Blog(props) {
  console.log(props)
  const [b, setB] = useState('');
  const [z, setz] = useState(false);
  if (props.location.state !== undefined && z === false) {
    setB(props.location.state.a)
    setz(true)
  }

  const [c, setC] = useState('');
  const [y, setY] = useState(false);
  if (props.location.state !== undefined && y === false) {
    setC(props.location.state.a)
    setY(true)
  }

  const classes = useStyles();
  const [a, setA] = useState('1');
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick3 = () => {
    setExpanded2(!expanded2);
  };
  return (
    <div style={{ backgroundColor: 'black' }}>
      {b === true ?
        <PrimarySearchAppBar
          val={a}
        />
        :
        c === '1' ?
          <PrimarySearchAppBar2
            val={a}
            valc={c}
          />
          :
          <PrimarySearchAppBar2 />
      }

      <div style={{ marginTop: '5%',marginLeft: '5%',marginRight: '5%',paddingBottom:'5%' }}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} lg={4}>
            <Card className={classes.root}>
              <CardHeader
                title="Types Of Blood Diseases"
                subheader="September 14, 2015"
              />
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  There are many different blood diseases that are diagnosed and treated by hematologists. Some of these are benign (non-cancerous) and others are types of blood cancer. They can involve one or more of the three main types of blood cells (red blood cells, white blood cells, and platelets). They can also involve blood proteins involved in clotting. Not every blood disorder requires treatment. This is a list of some of the more common blood disorders treated by community hematologists.
        </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Icon>favorite</Icon>
                </IconButton>
                <IconButton aria-label="share">
                  <Icon>share</Icon>
                </IconButton>
                <IconButton
                  onClick={handleExpandClick1}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <Icon>expand_more</Icon>
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph><b>Red Blood Cell Disorders :</b></Typography>
                  <Typography paragraph>
                    Deficiencies or abnormalities in the red blood cells.
          </Typography>
                  <Typography paragraph><b>Anemia :</b></Typography>
                  <Typography paragraph>
                    A deficiency in the number of red blood cells often causing weakness and pallor. There are many potential causes of anemia.
          </Typography>
                  <Typography paragraph><b>Aplastic Anemia :</b></Typography>
                  <Typography paragraph>
                    A type of anemia occurring when the bone marrow fails to produce enough of all three types
                    of blood cells: red cells, white cells, and platelets. The Aplastic Anemia & MDS International Foundation,
                    Inc. is a good resource to learn more about this disorder..
          </Typography>
                  <Typography paragraph><b>Sickle Cell Anemia :</b></Typography>
                  <Typography paragraph>
                    an inherited blood disorder where blood cells are sickle (or “C”) shaped and block blood flow.
                    Clumps of sickle cells block blood flow to the limbs and organs, and can cause pain, serious infection, and organ damage.
                    The American Sickle Cell Anemia Association, a nonprofit organization providing a wide range of services to those individuals
                    and families with either sickle cell anemia, sickle cell trait, or variants of the disease.
          </Typography>
                  <Typography paragraph><b>Thalassemia  :</b></Typography>
                  <Typography paragraph>
                    A hereditary blood disorder affecting hemoglobin, the molecule that carries oxygen. At About Thalassemia (part of Cooley’s Anemia Foundation)
                    patients can find general information about the different types of Thalassemia.
          </Typography>
                  <Typography paragraph><b>Leukemia  :</b></Typography>
                  <Typography paragraph>
                    A group of diseases where white blood cells grow uncontrollably.
                    These diseases are classified according to how quickly the disease grows and the type of cells affected.
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          <Grid item sm={12} md={6} lg={4}>
            <Card className={classes.root}>
              <CardHeader
                title="Blood bank"
                subheader="october 21, 2020"
              />
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1582719298866-977ee81c87d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion.
                  The term "blood bank" typically refers to a division of a hospital where the storage of blood product occurs and where proper testing is performed. However, it sometimes refers to a collection center, and indeed some hospitals also perform collection. Blood banking includes tasks related to blood collection, processing, testing, separation, and storage.
        </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Icon>favorite</Icon>
                </IconButton>
                <IconButton aria-label="share">
                  <Icon>share</Icon>
                </IconButton>
                <IconButton
                  onClick={handleExpandClick2}
                  aria-expanded={expanded1}
                  aria-label="show more"
                >
                  <Icon>expand_more</Icon>
                </IconButton>
              </CardActions>
              <Collapse in={expanded1} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph><b>Types of blood transfused :</b></Typography>
                  <Typography paragraph>
                    Whole blood which is blood without separation. red blood cells or packed cells is transfused to patients with anaemia/iron deficiency.
                    It also helps to improve the oxygen saturation in blood. It can be stored at 1.0 °C-6.0 °C for 35–45 days. Platelet transfusion,
                    is transfused to those who suffer from low platelet count. Platelets can be stored at room temperature for up to 5–7 days.
                    The donation of Plasma is called (plasmapheresis).Plasma transfusion is indicated to patients with liver failure, severe infections or serious burns. also has single donor platelets
                    which has more platelet count but it is bit expensive than regular. Fresh frozen plasma also called ffp can be stored at a very low temperature of -25 °C for up to 12 months.
          </Typography>
                  <Typography paragraph><b>First World War :</b></Typography>
                  <Typography paragraph>
                    The First World War acted as a catalyst for the rapid development of blood banks and transfusion techniques. Canadian Lieutenant Lawrence Bruce Robertson was instrumental in persuading the Royal Army Medical Corps (RAMC) to adopt the use of blood transfusion at the Casualty Clearing Stations for the wounded. In October 1915, Robertson performed his first wartime transfusion with a syringe to a patient suffering from multiple shrapnel wounds. He followed this up with four subsequent transfusions in the following months, and his success was reported to Sir Walter Morley Fletcher, director of the Medical Research Committee
                    Robertson published his findings in the British Medical Journal in 1916, and—with the help of a few like minded individuals (including the eminent physician Edward William Archibald who introduced the citrate anticoagulant method)—was able to persuade the British authorities of the merits of blood transfusion. Robertson went on to establish the first blood transfusion apparatus at a Casualty Clearing Station on the Western Front in the spring of 1917.
                    Oswald Hope Robertson, a medical researcher and U.S. Army officer was attached to the RAMC in 1917, where he was instrumental in establishing the first blood banks, with soldiers as donors, in preparation for the anticipated Third Battle of Ypres.He used sodium citrate as the anticoagulant, and the blood was extracted from punctures in the vein, and was stored in bottles at British and American Casualty Clearing Stations along the Front. He also experimented with preserving separated red blood cells in iced bottles.Geoffrey Keynes, a British surgeon, developed a portable machine that could store blood to enable transfusions to be carried out more easily.
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Card className={classes.root}>
              <CardHeader
                title="5 important blood tests"
                subheader="July 3, 2005"
              />
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1582719471425-ab68645ba31d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Your doctor typically orders blood tests for you during a physical, checkup, or an appointment intended for a specific condition.
                  Blood testing is usually partially or fully covered by insurance. Ordering tests through your medical provider ensures that you’re not paying too much. Your doctor can also advise you on how to choose testing facilities that are reliable, well-managed.
                  It’s possible to order your own blood tests without a doctor or even health insuranc.
        </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Icon>favorite</Icon>
                </IconButton>
                <IconButton aria-label="share">
                  <Icon>share</Icon>
                </IconButton>
                <IconButton
                  onClick={handleExpandClick3}
                  aria-expanded={expanded2}
                  aria-label="show more"
                >
                  <Icon>expand_more</Icon>
                </IconButton>
              </CardActions>
              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph><b>1. Complete blood count :</b></Typography>
                  <Typography paragraph>
                    A routine complete blood count (CBC) test checks for levels of 10 different components of every major cell in your blood: white blood cells, red blood cells, and platelets. Important components measured by this test include red blood cell count, hemoglobin, and hematocrit.
          </Typography>
                  <Typography paragraph><b>2. Basic metabolic panel :</b></Typography>
                  <Typography paragraph>
                    A basic metabolic panel (BMP) checks for levels of certain compounds in the blood, such as:
          <ul>
                      <li>electrolytes</li>
                      <li>calcium</li>
                      <li>glucose</li>
                      <li>sodium</li>
                      <li>potassium</li>
                      <li>carbon dioxide</li>
                      <li>chloride</li>
                      <li>blood urea nitrogen (BUN)</li>
                      <li>creatinine</li>
                    </ul>
          This test requires you to fast for at least eight hours before your blood is drawn.
          </Typography>
                  <Typography paragraph><b>3. Complete metabolic panel :</b></Typography>
                  <Typography paragraph>
                    A complete metabolic panel (CMP) includes all the measurements of a BMP as well as additional proteins and substances related to liver function:
          <ul>
                      <li>albumin</li>
                      <li>total protein</li>
                      <li>alkaline phosphatase (ALP)</li>
                      <li>alanine aminotransferase (ALT)</li>
                      <li>aspartate aminotransferase (AST)</li>
                      <li>bilirubin</li>
                    </ul>
          The same conclusions can be drawn from a CMP as from a BMP for the same substances that a BMP covers.
          </Typography>
                  <Typography paragraph><b>4. Lipid panel :</b></Typography>
                  <Typography paragraph>
                    This test checks levels of two types of cholesterolTrusted Source:
          <ul>
                      <li>high-density lipoprotein (HDL), or “good” cholesterol</li>
                      <li>low-density lipoprotein (LDL), or “bad” cholesterol</li>
                    </ul>
          HDL is “good” because it removes harmful substances from your blood and helps the liver break them down into waste. LDL is “bad” because it can cause plaque to develop in your arteries, increasing your risk of heart disease.
          You need to fast for at least 8 hours before this test.
          </Typography>
                  <Typography paragraph><b>5. Thyroid panel  :</b></Typography>
                  <Typography paragraph>
                    A thyroid panel, or thyroid function test, checks how well your thyroid is producing and reacting to certain hormones, such as:
          <ul>
                      <li>Triiodothyronine (T3). Along with T4, this regulates your heart rate and body temperature.</li>
                      <li>T3 resin uptake (RU). This measures how well a hormone called thyroxin-binding globulin is binding.</li>
                      <li>Thyroxine (T4). Along with T3, this regulates your metabolism and how you grow.</li>
                      <li>Thyroid-stimulating hormone (TSH). This helps regulate the levels of hormones your thyroid releases.</li>
                    </ul>
          Your thyroid, a tiny gland in your neck, helps regulate bodily functions like your mood, energy level, and overall metabolism.
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
