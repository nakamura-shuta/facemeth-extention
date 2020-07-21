async function load() {

  const resBaseImg = await fetch(chrome.extension.getURL('js/baseImg.js'), { method: 'GET' });
  const jsBaseImg = await resBaseImg.text();
  const scriptBaseImg = document.createElement('script');
  scriptBaseImg.textContent = jsBaseImg;
  document.body.insertBefore(scriptBaseImg, document.body.firstChild);

  const res = await fetch(chrome.runtime.getURL('js/cs.js'), { method: 'GET' });
  const js = await res.text();
  const script = document.createElement('script');
  script.textContent = js;
  document.body.insertBefore(script, document.body.firstChild);

  // --- tensorflow ---
  const res_tf = await fetch('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs', { method: 'GET' });
  const js_tf = await res_tf.text();
  const script_tf = document.createElement('script');
  script_tf.textContent = js_tf;

  // --- facemesh ---
  const script_face = document.createElement('script');
  script_face.src = 'https://cdn.jsdelivr.net/npm/@tensorflow-models/facemesh';

  document.body.insertBefore(script_face, document.body.firstChild);
  document.body.insertBefore(script_tf, document.body.firstChild);
}

window.addEventListener('load', async (evt) => {
  await load()
}, true);
