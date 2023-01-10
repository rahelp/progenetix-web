# Progenetix Pages and Forms

## Cancer Types

==TBD==

## Sample Search

### Variant and Positional Fields

==TBD==

### Biological and Metadata

==TBD==

### Technical Fields

#### _Response Limit_ and _Skip Pages_

This functionality allows e.g. the limited retrieval of
a subset of samples from large or general cancer types, or the "paging" through consecutive
sample groups for partitioned data retrieval.

The **Response Limit** (API parameter `limit`) sets the maximum number of returned
samples, to change it from the internal default of 2000[^1]. Typical use cases here are
the speeding-up of data visualization by selecting a smaller subset (e.g. 200) for
large expected returns, or the successive paging through large result sets.

With **Skip Pages** (API parameter `skip`) - in combinations with a **Response Limit** - one can retrieve
different parts of a large response; e.g. `skip=2` with `limit=100` will return
samples **201-300**.

==TBD==

## Data Visualization

==TBD==

## Ontology Services

Please see the [Services & API](services.md) page for more information.


[^1]: Values may change.