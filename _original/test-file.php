<div id='main'>
<script>
function loadPage() {
    var btn = document.getElementById("submit-btn");
    btn.click();

    //document.getElementById('');

    alert('test');
}

loadPage();

(function() {
    loadPage();
})();

</script>

<h1>Generate Your Lesson Plan Today!</h1>
<h3>Fill out the form below to create customized lesson plans below (featuring results customized by our proprietary VARK Assesment).</h3>
<br />
<label for='ai-form'>Classroom Information:</label>
<form id='ai-form'>
<ul>
<li>
<div id='grade-field' class='field'>
<label for='grades'>Grade: </label>
<select name='grades' id='grades'>
<option value='0'>Kindergarten</option>
<option value='1'>1st Grade</option>
<option value='2'>2nd Grade</option>
<option value='3'>3rd Grade</option>
<option value='4'>4th Grade</option>
<option value='5'>5th Grade</option>
<option value='6'>6th Grade</option>
<option value='7'>7th Grade</option>
<option value='8'>8th Grade</option>
<option value='9'>9th Grade</option>
<option value='10'>10th Grade</option>
<option value='11'>11th Grade</option>
<option value='12'>12th Grade</option>
<option value='13'>
         -- Post Secondary -- </option>
         
</select> 
</div>
</li>


<!--
<br />
<li>
<div id='subject-field' class='subject'>
Subject: 
<input type='text' id='subject-input' />
</li>
<li>
<br />
-->


<label for='lesson-input'>
Lesson Topic: 
</label>
<input type='text' id='lesson-input' />
</li>

<!--
<li>
<div id='chatgpt-interface' class='chatgpt'>
<div id='chatgpt-title' class='chatgpt'>
<h2>ChatGPT</h2>
</div>
</div>
</li>
-->


"Cookie":"_uasid=\"Z0FBQUFBQmxfRWxlNXVLX01QWGdXNjB0ejk4T25ucVZDUTBHcjlMdURpZWdFWGRVRHBrRUxfYmZHTXNwalBodC04djdJcEhPeUVRejNIdEZuMGdvb25yZC1kMGpWeWJhNVFPaDVHVUUwckwxUU9iWVhFMjEzbGViczVWWjhkOGtlQjFYMGI2TGVmeGcwcHNaVnAwTE5lbldSQlRydUFzeVFQTTVMSC03TGIzUjA3Mnp4bnhaT19qV3hjZHlsaFNzYy1NazZpaHpOQWVUaHBudlpVZThkRUt1c1hXQlNjSEdtSUlxXzExMVhLY2QyQWhVaENsWU1NZUZhUzZtNmtBejl0M1M2WkhuNGJ6TEdNQU9QUlJTeUxLcVNrdUxPX3RzMEZVbzR2UmJCXzV4NHVGQjRseEVIdXByekViZTJudE83djd2WmlKcEZOQy10QVdsU0lEbXNaU1g0WFZwWkZNWXdnPT0=\"; _umsid=\"Z0FBQUFBQmxfRWxldVRSLWw1SVJFZERvYU9SME1ielpHNF85VmtyUXBxUkVVZ1FuaUg1b0xDNDdwYjBmV3FycjZ2bHJmekhVYXh4MEpMUEo2UTZtcXpGU3lTMG02ZUJ1amhiWkFPM3lLSzYxTm1hRjBLZFNJSTVRVG5rbHFqaFZGanhSSVVfZmpicW5hRmVJcDB4MUVVZTMwcXJmd1c0UU5IYVdveWdmYkh3UVd6ejRpZzAzeVFBTGdOMUlpc2NBZ3Z3WnFiWVRfWmVfSW5ZbUV6c2VjMGtfT04tRk5IRUtxaHpaNHhhRkFmMlBPaG9Od0JKdFJIUT0=\"; _cfuvid=2.9TKgi586XCz7xKm9xoTTf6a9R433y13Idk6qar63k-1711032456616-0.0.1.1-604800000; __cf_bm=4kukNHaeqLFtLL2aTr134PIapas75u6e5PuI4AKBp40-1711032452-1.0.1.1-RzUPN2tlsMk__ndaMjNoqUScLORJmwjBxHCpGu.p5tkyEp2SilPUX8SjmvmY.Z0X0Dq4jlKUUls.7XH3eNPG9A; _devicecheck=user-KMFAk2PcE5OnP6cRM3jYLntX:1711032262-RfMwEBfwCNVBB8rKjB8jmOGDvkdaeJ4UMEQewjnmuuM="


</ul>
<br />
<button id='submit-btn' onclick="loadPage()">Submit</button>
</form>
</div>